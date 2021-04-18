<?php

namespace Drupal\wsm_discounts\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class ImportJson.
 */
class ImportJson extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'wsm_discounts.importjson',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'import_json';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('wsm_discounts.importjson');
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);
    wsm_discounts_import_json();
    $this->config('wsm_discounts.importjson')
      ->set('import', $form_state->getValue('import'))
      ->save();
  }

}
