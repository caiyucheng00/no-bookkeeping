package com.tkzj.nobookkeeping.entity;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * @author 虚幻的元亨利贞
 * @Description
 * @date 2022-05-12 17:28
 */
@Data
public class User {
    private int userId;
    private String userName;
    private String userPassword;
    private String userEmail;
}
