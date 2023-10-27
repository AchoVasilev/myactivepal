package com.project.ports.rest;

import com.project.application.services.WorkoutService;
import io.micronaut.http.annotation.Controller;

@Controller("/workouts")
public class WorkoutController {
    private final WorkoutService workoutService;

    public WorkoutController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }


}
