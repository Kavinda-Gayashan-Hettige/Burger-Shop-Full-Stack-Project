package edu.icet.ecom.controller;

import edu.icet.ecom.dto.Menu_items;
import edu.icet.ecom.service.Menu_itemsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/menu_items")
@RequiredArgsConstructor
@CrossOrigin
public class Menu_itemsController {
    //   http://localhost:8080/menu_items/add

     final Menu_itemsService service;

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public void addMenu_items(@RequestBody Menu_items menu_items) {
        service.addMenu_items(menu_items);

    }

    @GetMapping("/get-all")
    public List<Menu_items> getAll() {
        return service.getAll();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteMenu_items(@PathVariable Integer id) {
        service.deleteMenu_items(id);
    }

    @PutMapping("/update-menu_items")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateMenu_items(@RequestBody Menu_items menu_items) {
        service.updateMenu_items(menu_items);
    }

    @GetMapping("/search-by-id/{id}")
    public Menu_items searchById(@PathVariable Integer id) {
        return service.searchById(id);
    }

    @GetMapping("/search-by-name/{name}")
    public List<Menu_items> searchByName(@PathVariable String name) {
        return service.searchByName(name);
    }

}
