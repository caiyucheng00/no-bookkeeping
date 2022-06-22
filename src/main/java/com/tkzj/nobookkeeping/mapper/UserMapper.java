package com.tkzj.nobookkeeping.mapper;

import com.tkzj.nobookkeeping.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author 虚幻的元亨利贞
 * @Description
 * @date 2022-06-16 8:00
 */
@Mapper
public interface UserMapper {
    List<User> queryByNameAndPassword(@Param("user") User user);
    Integer register(User user);
}
