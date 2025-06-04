package com.example.service;

import com.example.websocket.WebSocketHandler;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class MessageConsumerService {

    @Autowired
    private WebSocketHandler webSocketHandler;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @KafkaListener(topics = "topico1", groupId = "topico1-group", containerFactory = "kafkaListenerContainerFactory")
    public void consumeTopico1(ConsumerRecord<String, String> record, Acknowledgment acknowledgment) {
        processMessage(record, "Consumer-Topico1", acknowledgment);
    }

    @KafkaListener(topics = "topico2", groupId = "topico2-group", containerFactory = "kafkaListenerContainerFactory")
    public void consumeTopico2(ConsumerRecord<String, String> record, Acknowledgment acknowledgment) {
        processMessage(record, "Consumer-Topico2", acknowledgment);
    }

    @KafkaListener(topics = "topico3", groupId = "topico3-group", containerFactory = "kafkaListenerContainerFactory")
    public void consumeTopico3(ConsumerRecord<String, String> record, Acknowledgment acknowledgment) {
        processMessage(record, "Consumer-Topico3", acknowledgment);
    }

    private void processMessage(ConsumerRecord<String, String> record, String consumerId, Acknowledgment acknowledgment) {
        try {
            Map<String, Object> messageData = new HashMap<>();
            messageData.put("content", record.value());
            messageData.put("topic", record.topic());
            messageData.put("partition", record.partition());
            messageData.put("offset", record.offset());
            messageData.put("consumerId", consumerId + "-P" + record.partition());
            messageData.put("timestamp", LocalDateTime.now().toString());

            String jsonMessage = objectMapper.writeValueAsString(messageData);
            
            System.out.printf("Enviando por WebSocket: %s%n", jsonMessage);
            webSocketHandler.broadcastMessage(jsonMessage);

            System.out.printf("Procesado por %s: Tópico=%s, Partición=%d, Offset=%d, Mensaje=%s%n",
                    consumerId, record.topic(), record.partition(), record.offset(), record.value());

            acknowledgment.acknowledge();
        } catch (Exception e) {
            System.err.println("Error procesando mensaje: " + e.getMessage());
            e.printStackTrace();
        }
    }
}