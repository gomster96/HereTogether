package heretogether.server.post;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class PostRepository {
    private final EntityManager em;

    public void save(Post post){
        if(post.getId() == null){
            em.persist(post);
        } else {
            em.merge(post);
        }
    }

    public Post findOne(Long id){ return em.find(Post.class, id);}

    public List<Post> findAllByDate(){
        return em.createQuery("select p from Post p", Post.class)
                .getResultList();
    }
}
