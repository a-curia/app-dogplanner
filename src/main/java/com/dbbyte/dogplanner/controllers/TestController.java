package com.dbbyte.dogplanner.controllers;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author adrian on 12/3/2017
 * @project app-dogplanner
 */

@RestController
public class TestController {

    @RequestMapping(value = "/hello", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public String hello(){
        return "Hello App";
    }
}
