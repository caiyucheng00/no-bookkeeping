package com.tkzj.nobookkeeping.entity;

import lombok.Data;

@Data
public class Record {
    int recordId;
    int spendType;
    int inOut;
    String date;
    double money;
    String note;
    int accountId;
}
