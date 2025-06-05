package com.codeexplainer.codeexplainer.service;

import com.codeexplainer.codeexplainer.dto.OllamaRequest;
import com.codeexplainer.codeexplainer.dto.OllamaResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class CodeExplanationService {

    private final WebClient.Builder webClientBuilder;

    @Value("${spring.ai.ollama.base-url}")
    private String baseUrl;

    @Value("${spring.ai.ollama.model}")
    private String model;

    public String explainCode(String code) {
        String prompt = "Please explain the following Java code in detail:\n\n" + code;

        OllamaRequest request = new OllamaRequest(model, prompt);

        WebClient webClient = webClientBuilder.baseUrl(baseUrl).build();

        // Get stream as Flux<String>
        String fullResponse = webClient.post()
                .uri("/api/generate")
                .bodyValue(request)
                .retrieve()
                .bodyToFlux(String.class)
                .map(chunk -> {
                    try {
                        ObjectMapper mapper = new ObjectMapper();
                        JsonNode node = mapper.readTree(chunk);
                        return node.has("response") ? node.get("response").asText() : "";
                    } catch (Exception e) {
                        return "";
                    }
                })
                .collectList()
                .map(chunks -> String.join("", chunks))
                .block();

        return fullResponse != null && !fullResponse.isBlank()
                ? fullResponse
                : "No explanation received.";
    }

}
