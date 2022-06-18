package com.tkzj.nobookkeeping.service.impl;


import com.tkzj.nobookkeeping.entity.Account;
import com.tkzj.nobookkeeping.mapper.AccountMapper;
import com.tkzj.nobookkeeping.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountMapper accountMapper;

    @Override
    public boolean addAccount(String accountName, int userId) {
        return accountMapper.addAccount(accountName, userId) == 1;
    }

    @Override
    public List<Account> getAllAccounts(int userId) {
        return accountMapper.getAccountsByUserId(userId);
    }

    @Override
    public boolean deleteAccount(int accountId) {
        return accountMapper.deleteAccountByAccountId(accountId) == 1;
    }

    @Override
    public boolean updateAccountName(int accountId, String newAccountName) {
        return accountMapper.updateAccountName(newAccountName, accountId) == 1;
    }
}
