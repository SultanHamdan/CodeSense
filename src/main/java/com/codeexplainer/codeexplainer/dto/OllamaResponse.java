package com.codeexplainer.codeexplainer.dto;

import lombok.Data;
import java.util.List;

@Data
public class OllamaResponse {
    private List<Result> results;

    @Data
    public static class Result {
        private String text;
    }

    public String getResponse() {
        if (results != null && !results.isEmpty()) {
            return results.get(0).getText();
        }
        return null;
    }
}
