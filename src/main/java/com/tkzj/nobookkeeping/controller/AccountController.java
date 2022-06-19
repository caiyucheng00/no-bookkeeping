package com.tkzj.nobookkeeping.controller;


import com.tkzj.nobookkeeping.dto.Result;
import com.tkzj.nobookkeeping.entity.Account;
import com.tkzj.nobookkeeping.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/account")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping("/{userId}")
    public Result<List<Account>> showAllAccounts(@PathVariable int userId) {
        List<Account> accountList = accountService.getAllAccounts(userId);

        if (accountList.size() > 0) {
            return Result.success(accountList);
        } else {
            return Result.error("这里还没有账本哦，快来创建一个吧~");
        }
    }

    @PostMapping
    public Result<String> addAccount(@RequestBody Account account) {
        boolean flag = accountService.addAccount(account.getAccountName(), account.getUserId());
        if (flag) {
            return Result.success("账单创建成功！");
        } else {
            return Result.error("发生未知错误，账单创建失败！");
        }
    }

    @DeleteMapping("/{accountId}")
    public Result<String> deleteAccount(@PathVariable int accountId) {
        boolean flag = accountService.deleteAccount(accountId);
        if (flag) {
            return Result.success("账单删除成功！");
        } else {
            return Result.error("发生未知错误，账单删除失败！");
        }
    }

    @PutMapping
    public Result<String> updateAccountName(@RequestBody Account account) {
        boolean flag = accountService.updateAccountName(account.getAccountId(), account.getAccountName());
        if (flag) {
            return Result.success("账单名修改成功！");
        } else {
            return Result.error("发生未知错误，账单删除失败！");
        }
    }
}
