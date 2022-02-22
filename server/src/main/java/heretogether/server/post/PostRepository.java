package heretogether.server.post;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.time.LocalDateTime;
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

    public List<Post> findAllByDate(String date){
        int Year = Integer.parseInt(date.substring(0,4));
        int Month = Integer.parseInt(date.substring(4,6));
        int day = Integer.parseInt(date.substring(6));

        LocalDateTime startDate = LocalDateTime.of(Year, Month, day, 0, 0);
        LocalDateTime endDate = LocalDateTime.of(Year, Month, day, 23, 59);
        return em.createQuery("select p from Post p where p.deadline " +
                "between :startDate And :endDate", Post.class)
                .setParameter("startDate", startDate)
                .setParameter("endDate", endDate)
                .getResultList();

    }
}
