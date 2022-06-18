package com.tkzj.nobookkeeping.dto;

import lombok.Data;

/**
 * @author 虚幻的元亨利贞
 * @Description
 * @date 2022-05-12 17:37
 */
@Data
public class Result<T> {
    private int code;
    private String msg;
    private T data;

    public static <T> Result<T> success(T object){
        Result<T> result = new Result<>();
        result.code = 1;
        result.data = object;

        return result;
    }

    public static <T> Result<T> error(String msg){
        Result<T> result = new Result<>();
        result.code = 0;
        result.msg = msg;

        return result;
    }
}
