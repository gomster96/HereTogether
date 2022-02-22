package heretogether.server.post;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;
@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
class PostServiceTest {
    @Autowired EntityManager em;
    @Autowired PostService postService;
    @Autowired PostRepository postRepository;

    @Test
    @Rollback(false)
    public void 포스트_저장(){
        //given
        Taxi taxi = new Taxi();
        taxi.setTitle("양덕으로 택시팟 구해여");
        taxi.setContent("언제몇시몇시이거는 컨텐트입니다아아아아아언제몇시몇시이거는 컨텐트입니다아아아아아언제몇시몇시이거는 컨텐트입니다아아아아아");
        taxi.setCreated_at(LocalDateTime.now());
        taxi.setCapacity(4);
        taxi.setDeparture("학교");
        taxi.setArrival("양덕");

        //when
        Long saveId = postService.savePost(taxi);
        em.flush();
        //then
        assertEquals(taxi, postRepository.findOne(saveId));
    }
}