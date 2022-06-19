package com.tkzj.nobookkeeping.service.impl;


import com.tkzj.nobookkeeping.entity.Record;
import com.tkzj.nobookkeeping.mapper.RecordMapper;
import com.tkzj.nobookkeeping.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RecordServiceImpl implements RecordService {
    @Autowired
    private RecordMapper recordMapper;

    @Override
    public List<Record> showRecordsOfCurrentAccount(int accountId) {//展示当前账本的所有收支记录
        return recordMapper.getRecordsByAccountId(accountId);
    }

    @Override
    public boolean addRecordIntoCurrentAccount(Record record) {//添加记录到当前所选账本中
        return recordMapper.addRecord(record) == 1;
    }

    @Override
    public boolean deleteRecordByRecordId(int recordId) {//删除所选收支记录
        return recordMapper.deleteByRecordId(recordId) == 1;
    }

    @Override
    public List<Record> showRecordsOfSelectedDates(String from, String to) {//根据所选日期展示相关收支记录
        return recordMapper.getRecordsByDate1AndDate2(from, to);
    }
}
