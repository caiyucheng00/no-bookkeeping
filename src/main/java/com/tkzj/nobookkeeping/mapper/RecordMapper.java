package com.tkzj.nobookkeeping.mapper;


import com.tkzj.nobookkeeping.entity.Record;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RecordMapper {
    List<Record> getRecordsByAccountId(int accountId);
    int addRecord(Record record);
    int deleteByRecordId(int recordId);
    List<Record> getRecordsByDate1AndDate2(int accountId, int inOut, String startTime, String endTime);
}
