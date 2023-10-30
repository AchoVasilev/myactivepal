package com.project.application.models.workout;

import com.project.domain.workout.Workout;
import io.micronaut.serde.annotation.Serdeable;

import java.util.List;
import java.util.UUID;

@Serdeable
public record WorkoutDetailsResource(UUID id, String workoutTemplateName) {
    public static WorkoutDetailsResource from(Workout workout) {
        return new WorkoutDetailsResource(workout.getId(),
                workout.getWorkoutTemplate() != null ? workout.getWorkoutTemplate().getName() : null);
    }
}