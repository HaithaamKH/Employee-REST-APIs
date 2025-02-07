package com.Spring.restCrudApi.exception;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class EmployeeErrorResponse {
    private int status;
    private String message;
    private long timeStamp;


}
