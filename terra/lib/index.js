module.exports = ({ wallets, refs, config, client }) => ({
  getClout: () => client.query("clicker", { get_clout: {} }),
  getScores: () => client.query("clicker", { get_scores: {} }),
  upsertScore: (score, signer = wallets.validator) =>
    client.execute(signer, "clicker", { upsert_score: { score } }),
});
