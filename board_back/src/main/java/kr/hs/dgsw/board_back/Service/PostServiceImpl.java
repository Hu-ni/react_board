package kr.hs.dgsw.board_back.Service;

import kr.hs.dgsw.board_back.Domain.Post;
import kr.hs.dgsw.board_back.Domain.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostMapper pm;

    @Override
    public List<Post> findAll() {
        return this.pm.findAll();
    }

    @Override
    public int deleteById(Long id) {
        return this.pm.deleteById(id);
    }

    @Override
    public Long add(Post post) {
        return this.pm.add(post);
    }

    @Override
    public int modify(Post post) {
        return this.pm.modify(post);
    }

    @Override
    public Post findById(Long id) {
        return this.pm.findById(id);
    }

    @Override
    public List findByUserId(Long id) {
        return this.pm.findByUserId(id);
    }

    @Override
    public int addWithHashMap(Post p) {
        HashMap map = new HashMap<String, Object>();
        map.put("user_id", p.getUser_id());
        map.put("title", p.getTitle());
        map.put("content", p.getContent());
        return this.pm.addWithHashMap(map);
    }

}
