package heretogether.server.post;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("D")
@Getter @Setter
public class Delivery extends Post{
    private String restaurant;
    private String arrival;
    private String img;
}
