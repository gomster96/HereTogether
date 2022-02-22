package heretogether.server.post;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    @Transactional
    public Long savePost(Post post){
        postRepository.save(post);
        return post.getId();
    }

    public List<Post> findPostsByDate(String date){
        return postRepository.findAllByDate(date);
    }
    public Post findOne(Long postId){
        return postRepository.findOne(postId);
    }
}
