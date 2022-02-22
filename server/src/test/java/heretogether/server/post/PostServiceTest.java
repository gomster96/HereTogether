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
    public void 택시_포스트_저장(){


        Taxi taxi = new Taxi();
        taxi.setTitle("양덕으로 택시팟 구해여");
        taxi.setContent("언제몇시몇시이거는 컨텐트입니다아아아아아언제몇시몇시이거는 컨텐트입니다아아아아아언제몇시몇시이거는 컨텐트입니다아아아아아");
        taxi.setCreated_at(LocalDateTime.now());
        taxi.setCapacity(4);
        taxi.setDeparture("학교");
        taxi.setArrival("양덕");
        taxi.setDeadline(LocalDateTime.of(2022, 3, 1, 4, 22));

        //when
        Long saveId = postService.savePost(taxi);

        em.flush();
        //then
        assertEquals(taxi, postRepository.findOne(saveId));
    }

    @Test
    @Rollback(false)
    public void 카풀_포스트_저장(){
        //given
        Car car = new Car();
        car.setTitle("양덕으로 카풀멤버 구해여");
        car.setContent("언제몇시몇시이거는 컨텐트입니다아아아아아언제몇시몇시이거는 컨텐트입니다아아아아아언제몇시몇시이거는 컨텐트입니다아아아아아");
        car.setCreated_at(LocalDateTime.now());
        car.setCapacity(4);
        car.setDeparture("학교");
        car.setArrival("양덕");
        car.setDeadline(LocalDateTime.of(2022, 3, 1, 4, 22));
        //when
        Long saveId = postService.savePost(car);

        em.flush();
        //then
        assertEquals(car, postRepository.findOne(saveId));
    }


}