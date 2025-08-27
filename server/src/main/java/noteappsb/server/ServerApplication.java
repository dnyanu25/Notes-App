package noteappsb.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }
    
    // Add @CrossOrigin to the specific method or the controller
    @CrossOrigin(origins = "http://localhost:5173") // Explicitly allow your React origin
    @GetMapping("/home")
    public String home() {
        return "Hello, Spring Boot!";
    }
}