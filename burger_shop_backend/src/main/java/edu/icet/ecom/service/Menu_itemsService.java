package edu.icet.ecom.service;

import edu.icet.ecom.dto.Menu_items;

import java.util.List;

public interface Menu_itemsService {

    void addMenu_items(Menu_items menu_items);

    List<Menu_items> getAll();

    void deleteMenu_items(Integer id);

    void updateMenu_items(Menu_items menu_items);

    Menu_items searchById(Integer id);

    List<Menu_items> searchByName(String name);
}
