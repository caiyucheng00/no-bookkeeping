package com.tkzj.nobookkeeping.mapper;


import com.tkzj.nobookkeeping.entity.Account;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AccountMapper {
    List<Account> getAllAccounts();
    Account getAccountByAccountId(int accountId);
    List<Account> getAccountsByUserId(int userId);
    int addAccount(String accountName, int userId);
    int deleteAccountByAccountId(int accountId);
    int updateAccountName(String newAccountName, int accountId);
}
