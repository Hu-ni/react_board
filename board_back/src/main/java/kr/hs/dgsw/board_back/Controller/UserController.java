package kr.hs.dgsw.board_back.Controller;

import kr.hs.dgsw.board_back.Domain.User;
import kr.hs.dgsw.board_back.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService us;

    @GetMapping(value = "/user/findAll")
    public List findAll(){
        return this.us.findAll();
    }

    @GetMapping("/user/findById/{id}")
    public User findById(@PathVariable Long id){
        return this.us.findById(id);
    }

    @GetMapping("/user/findByUser")
    public User findByUser(@RequestParam String account, String password) {
        return this.us.findByUser(account,password);
    }

    @GetMapping("/user/findByAccount/{account}")
    public User findByAccount(@PathVariable String account) {
        return this.us.findByAccount(account);
    }

    @PostMapping("/user/add")
    public Long add(@RequestBody User u){
        return this.us.add(u);
    }

    @PutMapping("/user/modify")
    public int modify(@RequestBody User u){
        return this.us.modify(u);
    }

    @DeleteMapping("/user/deleteById/{id}")
    public int deleteById(@PathVariable Long id){
        return this.us.deleteById(id);
    }
}
