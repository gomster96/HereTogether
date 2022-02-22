package heretogether.server.post;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    // taxi, car, delivery, purchase, exercise 마다 하나씩 만들기

    @GetMapping("/posts")
    public List<Post> getPostByDate(
            @RequestParam(value="type") String dType,
            @RequestParam(value="date")String date //20220223 이런 꼴로 받을 예정
    ){
        return postService.findPostsByDate(dType,date);
    }


}
