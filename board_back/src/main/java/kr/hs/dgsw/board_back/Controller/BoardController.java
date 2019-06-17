package kr.hs.dgsw.board_back.Controller;

import kr.hs.dgsw.board_back.Service.PostService;
import kr.hs.dgsw.board_back.Service.UserService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
public class BoardController {
    @Autowired
    UserService us;

    @Autowired
    PostService ps;
}
