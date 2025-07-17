package edu.icet.ecom.service.impl;

import edu.icet.ecom.dto.Menu_items;
import edu.icet.ecom.entity.Menu_itemsEntity;
import edu.icet.ecom.repository.Menu_itemsRepository;
import edu.icet.ecom.service.Menu_itemsService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class Menu_itemsServiceImpl implements Menu_itemsService {
    final Menu_itemsRepository repository;
    final ModelMapper mapper;


    @Override
    public void addMenu_items(Menu_items menu_items) {
        System.out.println(menu_items);
        repository.save(mapper.map(menu_items,Menu_itemsEntity.class));
    }

    @Override
    public List<Menu_items> getAll() {
        List<Menu_items> menu_itemsList = new ArrayList<>();
        List<Menu_itemsEntity> all = repository.findAll();

        all.forEach(menuItemsEntity -> {
            menu_itemsList.add(mapper.map(menuItemsEntity,Menu_items.class));

        });
        return menu_itemsList;
    }

    @Override
    public void deleteMenu_items(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public void updateMenu_items(Menu_items menu_items) {
        repository.save(mapper.map(menu_items,Menu_itemsEntity.class));
    }

    @Override
    public Menu_items searchById(Integer id) {
        return mapper.map(repository.findById(id), Menu_items.class);
    }

    @Override
    public List<Menu_items> searchByName(String name) {
        List<Menu_itemsEntity> byName = repository.findByName(name);
        List<Menu_items> menu_itemsList= new ArrayList<>();

        byName.forEach(menuItemsEntity -> {
            menu_itemsList.add(mapper.map(menuItemsEntity,Menu_items.class));
        });
        return menu_itemsList;
    }
}
