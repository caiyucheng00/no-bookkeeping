package com.tkzj.nobookkeeping.service.impl;

import com.tkzj.nobookkeeping.entity.User;
import com.tkzj.nobookkeeping.mapper.UserMapper;
import com.tkzj.nobookkeeping.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author 虚幻的元亨利贞
 * @Description
 * @date 2022-06-16 8:06
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper employeeMapper;


    @Override
    public boolean queryByNameAndPassword(User user) {
        List<User> userList = employeeMapper.queryByNameAndPassword(user);
        return userList.size() > 0;
    }
}
