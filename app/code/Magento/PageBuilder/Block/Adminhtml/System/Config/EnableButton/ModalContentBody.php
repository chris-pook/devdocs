<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Magento\PageBuilder\Block\Adminhtml\System\Config\EnableButton;

use Magento\Backend\Block\Template;
use Magento\Framework\View\Element\Block\ArgumentInterface;

class ModalContentBody extends Template implements ArgumentInterface
{
    /**
     * {@inheritdoc}
     */
    protected $_template = 'Magento_PageBuilder::system/config/enableButton/modalContentBody.phtml';

    /**
     * Get HTML content for block
     *
     * @return string
     */
    public function render()
    {
        return $this->_toHtml();
    }
}
