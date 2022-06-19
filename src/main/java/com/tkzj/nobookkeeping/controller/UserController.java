package com.tkzj.nobookkeeping.controller;

import com.tkzj.nobookkeeping.dto.Result;
import com.tkzj.nobookkeeping.entity.User;
import com.tkzj.nobookkeeping.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @author 虚幻的元亨利贞
 * @Description
 * @date 2022-06-16 8:08
 */
@RestController
@Slf4j
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Result<User> login(@RequestBody Map<String, String> map) {
        log.info(map.get("username"));
        log.info(map.get("password"));
        User user = new User();
        user.setUserName(map.get("username"));
        user.setUserPassword(map.get("password"));
        User userExist = userService.queryByNameAndPassword(user);
        if (userExist != null) {
            log.info("成功登录");
            return Result.success(userExist);
        } else {
            return Result.error("用户名或密码不存在");
        }
    }
}
