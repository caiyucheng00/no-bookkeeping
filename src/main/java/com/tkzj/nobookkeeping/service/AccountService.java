package com.tkzj.nobookkeeping.service;



import com.tkzj.nobookkeeping.entity.Account;

import java.util.List;

public interface AccountService {
    boolean addAccount(String accountName, int userId);
    List<Account> getAllAccounts(int userId);
    boolean deleteAccount(int accountId);
    boolean updateAccountName(int accountId, String newAccountName);
}
