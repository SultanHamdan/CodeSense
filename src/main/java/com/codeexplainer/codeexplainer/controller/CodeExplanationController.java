package com.codeexplainer.codeexplainer.controller;

import com.codeexplainer.codeexplainer.service.CodeExplanationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend running on port 3000
public class CodeExplanationController {

    private final CodeExplanationService codeExplanationService;

    // DTO to receive code text from client
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
