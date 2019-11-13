cube(`Orders`, {
  sql: `SELECT * FROM public.orders`,

  measures: {
    number: {
      sql: `number`,
      type: `sum`
    },
    count: {
      sql: `id`,
      type: `count`
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },

    status: {
      sql: `status`,
      type: `string`
    },

    createdAt: {
      sql: `created_at`,
      type: `time`
    },

    completedAt: {
      sql: `completed_at`,
      type: `time`
    }
  }
});
