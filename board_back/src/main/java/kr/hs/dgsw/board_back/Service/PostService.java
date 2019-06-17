package kr.hs.dgsw.board_back.Service;

import kr.hs.dgsw.board_back.Domain.Post;
import kr.hs.dgsw.board_back.Domain.User;

import java.util.HashMap;
import java.util.List;

public interface PostService {

    List<Post> findAll();
    int deleteById(Long id);
    Long add(Post post);
    int modify(Post post);
    Post findById(Long id);
    List findByUserId(Long id);
    int addWithHashMap(Post p);

}
