package heretogether.server.user;

import heretogether.server.domain.UnivCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
public class User {

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private Long id;
    private String profile;
    private String phone;
    private String name;
    private LocalDateTime created_at;
    @Enumerated(EnumType.STRING)
    private UnivCode univCode;

}
