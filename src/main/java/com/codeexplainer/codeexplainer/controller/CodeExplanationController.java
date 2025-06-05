package com.codeexplainer.codeexplainer.controller;

import com.codeexplainer.codeexplainer.service.CodeExplanationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CodeExplanationController {

    private final CodeExplanationService codeExplanationService;

    // DTO to receive code text from client (can also reuse OllamaRequest if you want)
    public static class ExplainRequest {
        private String code;
        public String getCode() { return code; }
        public void setCode(String code) { this.code = code; }
    }

    @PostMapping("/explain")
    public ResponseEntity<String> explainCode(@RequestBody ExplainRequest request) {
        String explanation = codeExplanationService.explainCode(request.getCode());
        return ResponseEntity.ok(explanation);
    }
}
