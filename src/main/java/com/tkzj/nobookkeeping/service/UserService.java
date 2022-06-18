package com.tkzj.nobookkeeping.service;

import com.tkzj.nobookkeeping.entity.User;

import java.util.List;

/**
 * @author 虚幻的元亨利贞
 * @Description
 * @date 2022-06-16 8:06
 */
public interface UserService {
    boolean queryByNameAndPassword(User user);
}
