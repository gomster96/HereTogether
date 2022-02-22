package heretogether.server.post;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("P")
@Getter @Setter
public class Purchase extends Post{
    private String link;
    private int price;
    private String product_name;
}
