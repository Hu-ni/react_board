package kr.hs.dgsw.board_back.Domain;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface PostMapper {

    List<Post> findAll();
    int deleteById(@Param("id") Long id);
    Long add(Post post);
    int modify(Post post);
    Post findById(@Param("id") Long id);
    List findByUserId(@Param("user_id") Long id);

    //  Key    | Value
    // user_id | Long
    // title   | String
    // content | String
    int addWithHashMap(HashMap<String,Object> map);
}
