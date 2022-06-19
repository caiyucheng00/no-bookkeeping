package com.tkzj.nobookkeeping.service;



import com.tkzj.nobookkeeping.entity.Record;

import java.util.List;

public interface RecordService {
    List<Record> showRecordsOfCurrentAccount(int accountId);//展示当前账本的所有记录
    boolean addRecordIntoCurrentAccount(Record record);//为当前账本新增一条收支记录
    boolean deleteRecordByRecordId(int recordId);//删除当前账本内的一条收收支记录

    List<Record> showRecordsOfSelectedDates(String from, String to);
}
