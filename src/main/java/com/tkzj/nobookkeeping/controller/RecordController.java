package com.tkzj.nobookkeeping.controller;


import com.tkzj.nobookkeeping.dto.Result;
import com.tkzj.nobookkeeping.entity.Record;
import com.tkzj.nobookkeeping.service.impl.RecordServiceImpl;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/records")
public class RecordController {
    @Autowired
    private RecordServiceImpl recordServiceImpl;

    @GetMapping("/accountId")
    public Result<List<Record>> showAllRecordsOfCurrentAccount(int accountId) {
        List<Record> list = recordServiceImpl.showRecordsOfCurrentAccount(accountId);
        if (list.size() > 0) {
            return Result.success(list);
        } else {
            return Result.error("当前账本无记录！");
        }
    }

    @GetMapping("/{accountId}/{from}/{to}")
    public Result<List<Record>> showRecordsFromDate1AndDate2(@PathVariable("from") String from, @PathVariable("to") String to) {
        List<Record> list = recordServiceImpl.showRecordsOfSelectedDates(from, to);
        if (list.size() > 0) {
            return Result.success(list);
        } else {
            return Result.error("当前账本内，所选日期内无相关记录！");
        }
    }



    @PostMapping
    public Result<String> addRecordIntoCurrentAccount(@RequestBody Record newRecord) {
        boolean flag = recordServiceImpl.addRecordIntoCurrentAccount(newRecord);
        if (flag) {
            return Result.success("记录添加成功");
        } else {
            return Result.error("记录添加失败！");
        }
    }

    @DeleteMapping("/recordId")
    public Result<String> deleteRecordByRecordId(int recordId) {
        boolean flag = recordServiceImpl.deleteRecordByRecordId(recordId);
        if (flag) {
            return Result.success("记录删除成功");
        } else {
            return Result.error("记录删除失败！");
        }
    }
}
