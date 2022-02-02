package heretogether.server.hello;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class listController {
    @GetMapping("/")
    public String welcome(){
        return "The server is running well.";
    }
}
