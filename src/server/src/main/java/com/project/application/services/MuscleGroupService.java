package com.project.application.services;

import com.project.domain.workout.MuscleGroup;
import com.project.infrastructure.data.MuscleGroupRepository;
import io.micronaut.transaction.annotation.Transactional;
import jakarta.inject.Singleton;
import java.util.List;
import java.util.UUID;

@Singleton
public class MuscleGroupService {
    private final MuscleGroupRepository muscleGroupRepository;

    public MuscleGroupService(MuscleGroupRepository muscleGroupRepository) {
        this.muscleGroupRepository = muscleGroupRepository;
    }

    @Transactional(readOnly = true)
    public List<MuscleGroup> findBy(List<String> ids) {
        return this.muscleGroupRepository.findByIdIn(ids);
    }
}