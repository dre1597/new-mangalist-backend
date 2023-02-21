import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { validateUuid } from '../../../utils/regex/validate-uuid';
import { BaseEntity } from '../base-entity';

const executeAfterTwoMinutes = (func) => {
  setTimeout(func, 1000 * 2);
};

class StubBaseEntity extends BaseEntity {}

describe('BaseEntity', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize its own fields', () => {
    const entity = new StubBaseEntity();

    expect(entity.id).toMatch(validateUuid);
    expect(entity.createdAt).toBeInstanceOf(Date);
    expect(entity.updatedAt).toBeInstanceOf(Date);
  });

  it('should be possible to update updatedAt field', () => {
    const entity = new StubBaseEntity();
    const updatedAt = entity.updatedAt.toISOString();

    executeAfterTwoMinutes(() => entity.updateUpdateAt());

    vi.advanceTimersByTime(2000);

    const newUpdatedAt = entity.updatedAt.toISOString();

    expect(updatedAt).not.toEqual(newUpdatedAt);
  });

  it('should not update createdAt on update updatedAt method', () => {
    const entity = new StubBaseEntity();
    const createdAt = entity.createdAt.toISOString();

    executeAfterTwoMinutes(() => entity.updateUpdateAt());
    vi.advanceTimersByTime(1000);

    entity.updateUpdateAt();

    const newCreatedAt = entity.createdAt.toISOString();

    expect(createdAt).toEqual(newCreatedAt);
  });
});
