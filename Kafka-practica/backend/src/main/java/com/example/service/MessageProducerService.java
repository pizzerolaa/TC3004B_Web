package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class MessageProducerService {

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public String sendMessage(String content) {
        String topic = determineTopicFromContent(content);
        
        if (topic == null) {
            throw new IllegalArgumentException("No se encontró palabra clave válida (topico1, topico2, topico3) en el mensaje");
        }

        kafkaTemplate.send(topic, content);
        return String.format("Mensaje enviado a %s: %s", topic, content);
    }

    private String determineTopicFromContent(String content) {
        String lowerContent = content.toLowerCase();
        
        if (lowerContent.contains("topico1")) {
            return "topico1";
        } else if (lowerContent.contains("topico2")) {
            return "topico2";
        } else if (lowerContent.contains("topico3")) {
            return "topico3";
        }
        
        return null;
    }
}