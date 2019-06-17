package kr.hs.dgsw.board_back.Controller;

import kr.hs.dgsw.board_back.Domain.Post;
import kr.hs.dgsw.board_back.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class PostController {
    @Autowired
    PostService ps;

    @GetMapping("/post/findAll")
    public List findAll() {
        return this.ps.findAll();
    }

    @GetMapping("/post/findById/{id}")
    public Post findById(@PathVariable Long id){
        return this.ps.findById(id);
    }

    @GetMapping("/post/findByUserId/{id}")
    public List findByUserId(@PathVariable Long id){
        return this.ps.findByUserId(id);
    }

    @PostMapping("/post/add")
    public Long add(@RequestBody Post p){
        return this.ps.add(p);
    }

    @PostMapping("/post/addWithHashMap")
    public int addWithHashMap(@RequestBody Post p){
        return this.ps.addWithHashMap(p);
    }

    @PutMapping("/post/modify")
    public int modify(@RequestBody Post p){
        return this.ps.modify(p);
    }

    @DeleteMapping("/post/deleteById/{id}")
    public int deleteById(@PathVariable Long id){
        return this.ps.deleteById(id);
    }

}
