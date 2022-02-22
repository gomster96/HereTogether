package heretogether.server.post;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @GetMapping("/posts")
    public List<Post> getPostByDate(
            @RequestParam(value="date")String date //20220223 이런 꼴로 받을 예정
    ){

        return postService.findPostsByDate(date);
    }


}
