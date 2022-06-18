package com.tkzj.nobookkeeping.entity;

import lombok.Data;

@Data
public class Record {
    int recordId;
    SpendType spendType;
    String date;
    double money;
    String note;
    int accountId;
}
