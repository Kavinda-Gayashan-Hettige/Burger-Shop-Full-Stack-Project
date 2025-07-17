package edu.icet.ecom.repository;

import edu.icet.ecom.entity.Menu_itemsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Menu_itemsRepository extends JpaRepository<Menu_itemsEntity,Integer> {
    List<Menu_itemsEntity> findByName(String name);
}
